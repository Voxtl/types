declare module "@voxtl/types" {
    interface UserData {
        id: string
        profile : Profile
    }

    interface Profile {
        avatar: string,
        bio: string,
        description: string,
    }

    interface NebulaData {
        event: string,
        data: unknown //todo
    }
}