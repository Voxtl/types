import type { v5 as uuid } from "uuid" 

declare module "@voxtl/types" {
    type GlobalRole = null | "Moderator" | "Administrator"

    type ChannelRole = null | string

    interface User {
        readonly id: typeof uuid,

        username: string,
        profile: Profile,
        channel: Channel,
        viewer: Viewer[]
        verified: boolean,
        role: GlobalRole,

        readonly stream_key: typeof uuid

        readonly created_at: Date,
        readonly updated_at: Date,
    }


    interface Viewer {
        readonly id: typeof uuid,

        user: User,
        channel: Channel,
        role: ChannelRole

        readonly created_at: Date
        readonly updated_at: Date
    }

    interface Profile {
        readonly id: typeof uuid,
    
        user: User,
        avatar: string | null,
        description: string | null,
        bio: string | null,

        readonly created_at: Date
        readonly updated_at: Date
    }

    interface Category {
        readonly id: typeof uuid,

        user: User,
        name: string,
        visible: boolean,
        channels_using: number,

        readonly created_at: Date
        readonly updated_at: Date
    }

    interface Channel {
        readonly id: typeof uuid,

        user: User,
        banned: Viewer[] | null,
        moderators: Viewer[] | null,
        categories: Category[],
        viewers: Viewer[],
        watching: number

        readonly created_at: Date
        readonly updated_at: Date
    }
}