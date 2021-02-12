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
        readonly id: typeof uuid,
        readonly profile_id: typeof uuid,
        readonly channel_id: typeof uuid,

        username: string,
        profile: Profile
        verified: boolean,
        global_role: GlobalRole,
        links: UserLinks
        readonly stream_key: typeof uuid

        readonly created_at: Date,
        readonly updated_at: Date,
    }

    interface Profile {
        readonly id: typeof uuid
        avatar: string | null,
        description: string | null,
        bio: string | null

        readonly created_at: Date
        readonly updated_at: Date
    }

    interface Category {
        readonly id: typeof uuid,
        name: string,
        visible: boolean,
        channels_using: number,

        readonly created_at: Date
        readonly updated_at: Date
    }

    interface Channel {
        readonly id: typeof uuid,
        banned_ids: null | typeof uuid[],
        moderator_ids: null | typeof uuid[],
        category_ids: typeof uuid[] | null,
        viewers: number

        readonly created_at: Date
        readonly updated_at: Date
    }
}