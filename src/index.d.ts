import type { v5 as uuid } from "uuid" 

declare module "@voxtl/types" {
    enum Permissions {
        NORMAL = 0,
        MODERATOR = 1,
        ADMIN = 2,
    }

    interface GlobalRole {
        readonly id: typeof uuid,

        permissions: Permissions,

        readonly created_at: Date,
        readonly updated_at: Date
    }

    interface ChannelRole {
        readonly id: typeof uuid,

        readonly created_at: Date,
        readonly updated_at: Date
    }

    interface User {
        readonly id: typeof uuid,

        username: string,
        profile: Profile,
        channel: Channel,
        viewers: Viewer[] | null,
        verified: boolean,
        role: GlobalRole,

        stream_key: typeof uuid

        readonly created_at: Date,
        readonly updated_at: Date,
    }


    interface Viewer {
        readonly id: typeof uuid,

        user: User,
        channel: Channel,
        role: ChannelRole,
        banned: boolean,

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
        channels_using?: number,

        readonly created_at: Date
        readonly updated_at: Date
    }

    interface Channel {
        readonly id: typeof uuid,

        user: User,
        categories: Category[],
        viewers: Viewer[],
        watching?: number

        readonly created_at: Date
        readonly updated_at: Date
    }
}