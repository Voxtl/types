import type { v5 as uuid } from "uuid" 

declare module "@voxtl/types" {
    type GlobalRole = null | "Moderator" | "Administrator"

    type UserLinks = [
        {
            rel: "channel",
            url: string
        },
        {
            rel: "profile",
            url: string
        }
    ]

    interface User {
        id: typeof uuid,
        username: string,
        profile: {
            avatar: string | null,
            description: string | null,
            bio: string | null
        },
        verified: boolean,
        global_role: GlobalRole,
        created_at: Date,
        links: UserLinks
    }

    interface BulkUser {
        id: typeof uuid,
        username: string,
        verified: boolean,
        global_role: GlobalRole,
        created_at: Date,
    }

    interface Category {
        id: typeof uuid,
        name: string,
        visible: boolean,
        created_at: Date
    }

    interface Channel {
        id: typeof uuid,
        banned?: User[],
        moderators?: User[],
        category: Category[],
        viewers: number
    }

    interface Self extends User {
        stream_key: string
    }

    interface _UserAttributes {
        id: typeof uuid,
        username: string,
        verified: boolean,
        global_role: GlobalRole,
        created_at: Date,
        profile_id: typeof uuid,
        channel_id: typeof uuid
    }

    interface _ChannelAttributes {
        id: typeof uuid,
        banned?: User[],
        moderators?: User[],
        category: Category[],
        user_id: typeof uuid
    }
}