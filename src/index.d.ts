import type { v5 as uuid } from "uuid" 

declare module "@voxtl/types" {
    type GlobalRole = null | "Moderator" | "Administrator"

    interface User {
        id: typeof uuid,
        username: string,
        profile: {
            avatar: string,
            description: string,
            bio: string
        },
        created: Date,
        verified: boolean,
        global_role: GlobalRole
    }

    interface Category {
        id: typeof uuid,
        slug: string,
        name: string,
        visible: boolean,
        created: Date
    }

    interface Channel extends User {
        banned?: User[],
        moderators: User[],
        category: Category,
        viewers: number
    }

    interface Self extends User {
        stream_key: string
    }
}