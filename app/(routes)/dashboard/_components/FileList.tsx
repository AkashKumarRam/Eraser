"use client"
import { FileListContext } from '@/app/_context/FilesListContext'
import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Archive, MoreHorizontalIcon } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface FILE {
    archive: boolean,
    createdBt: string,
    document: string,
    fileName: string,
    teamId: string,
    whiteboard: string,
    _id: string,
    _creationTime: number
}

function FileList() {

    const { fileList_, setFileList_ } = useContext(FileListContext);
    const [fileList, setFileList] = useState<any>();
    const { user }: any = useKindeBrowserClient();
    const router = useRouter();
    useEffect(() => {
        fileList_ && setFileList(fileList_);
        console.log(fileList_);
    }, [fileList_])

    return (
        <div className='mt-10'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</td>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {fileList && fileList.map((file: FILE, index: number) => (
                            <tr className='cursor-pointer odd:bg-gray-50' key={index} onClick={() => router.push('/workspace/'+file._id)}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{file.fileName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <Image className='rounded-full' src={user?.picture} alt='user-profile-logo' width={30} height={30} />
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <MoreHorizontalIcon />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem className='gap-3'>
                                                <Archive className='h-4 w-4'/> Archive
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FileList