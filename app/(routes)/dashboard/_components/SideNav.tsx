"use client"
import React, { useContext, useEffect, useState } from 'react'
import SideNavTopSection, { TEAM } from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import SideNavBottomSection from './SideNavBottomSection'
import { useConvex, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { FileListContext } from '@/app/_context/FilesListContext'

function SideNav() {

    const { user } = useKindeBrowserClient()

    const createFile = useMutation(api.files.createFile)

    const [activeTeam, setActiveTeam] = useState<TEAM>()

    const convex = useConvex()

    const [totalFiles,setTotalFiles] = useState<Number>()

    const {fileList_,setFileList_} = useContext(FileListContext)

    useEffect(() => {
        activeTeam && getFiles()
    }, [activeTeam])

    // const onFileCreate = (fileName: string) => {
    //     createFile({
    //         fileName: fileName,
    //         teamId: activeTeam?._id,
    //         createdBy: user?.email,
    //         archive: false,
    //         document: '',
    //         whiteboard: ''
    //     }).then((resp) => {
    //         if (resp) {
    //             getFiles()
    //             toast("File Created Successfully!")
    //         }
    //     }, (e) => {
    //         toast("Error while creating file")
    //     })
    // }

    const onFileCreate = (fileName: string) => {
        const userEmail = user?.email || ''; // Provide a default value if user or email is undefined
        const teamIdString = activeTeam?._id?.toString() || ''; // Convert to string explicitly
        createFile({
            fileName: fileName,
            teamId: teamIdString,
            createdBy: userEmail,
            archive: false,
            document: '',
            whiteboard: ''
        }).then((resp) => {
            if (resp) {
                getFiles();
                toast("File Created Successfully!");
            }
        }, (e) => {
            toast("Error while creating file");
        });
    };
    
    // const getFiles = async () => {
    //     const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id })
    //     setFileList_(result)
    //     setTotalFiles(result?.length)
    // }

    const getFiles = async () => {
        const teamId = (activeTeam?._id ?? '').toString(); // Ensure teamId is a string
        const result = await convex.query(api.files.getFiles, { teamId });
        setFileList_(result);
        setTotalFiles(result?.length);
    };

    return (
        <div className='flex flex-col h-screen fixed w-72 border-r border-[1px] p-6'>

            <div className='flex-1'>
                <SideNavTopSection user={user} setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)} />
            </div>


            <div>
                <SideNavBottomSection onFileCreate={onFileCreate} totalFiles={totalFiles} />
            </div>
        </div>
    )
}

export default SideNav



