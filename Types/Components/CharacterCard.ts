import { Image } from ".."

export interface CharacterProps {
    mal_id?: number,
    url?: string,
    images?: {
        jpg?: Image,
        webp?: Image
    },
    name?: string
}

export interface CharacterCardProps {
    source?: string,
    name?: string,
    role?: string,
    favorites?: number,
    language?: string,

}