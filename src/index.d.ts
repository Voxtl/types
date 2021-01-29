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
        profile: Profile
        verified: boolean,
        global_role: GlobalRole,
        created_at: Date,
        links: UserLinks
    }

    interface Profile {
        avatar?: string,
        description?: string,
        bio?: string
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
        banned_ids?: typeof uuid[],
        moderator_ids?: typeof uuid[],
        category_ids: typeof uuid[],
        user_id: typeof uuid
    }

    interface _ProfileAttributes {
        id: typeof uuid,
        avatar?: string,
        bio?: string,
        description?: string,
        user_id: typeof uuid
    }
}