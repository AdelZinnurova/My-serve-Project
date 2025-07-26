import {nanoid} from "@reduxjs/toolkit";

export type usersCardType = {
    title: string
    description: string
    id: string
}

export const usersCard: usersCardType[] = [
    {
        id: nanoid(),
        title: 'For Workspace Owners',
        description: `Maximize your business potential with higher utilization`
    },
    {
        id: nanoid(),
        title: 'For Freelancers',
        description: `Expand your client base and be your own boss when you need it`
    },
    {
        id: nanoid(),
        title: 'For Customers',
        description: `Book services seamlessly-no more juggling multiple apps`
    }
]

