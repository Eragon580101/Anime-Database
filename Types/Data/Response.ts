export interface Image {
    image_url?: string,
    small_image_url?: string,
    large_image_url?: string,
    medium_image_url?: string,
    maximum_image_url?: string,
}

export interface Trailer {
    youtube_id?: string,
    url?: string,
    embed_url?: string
    images?: Image
}

export interface Title {
    type?: string,
    title?: string
}

export interface Date {
    day?: number | null,
    month?: number | null,
    year?: number | null
}

export interface Extra {
    mal_id?: number,
    type?: string,
    name?: string,
    url?: string
}

interface Aired {
    from?: string | null,
    to?: string | null,
    prop?: {
        from?: Date,
        to?: Date
    }
    string?: string | null
}

export interface ResponseData {
    mal_id?: number,
    url?: string,
    images?: {
        jpg?: Image | null,
        webp?: Image | null,
    },
    trailer?: Trailer,
    approved?: true | false,

    titles?: Title[],
    title?: string | null,
    title_english?: string | null,
    title_japanese?: string | null,
    title_synonyms?: string[],

    type?: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music" | "Manga" | "Light Novel" | "One-shot" | "Doujinshi" | "Manhwa" | "Manhua" | "Omnibus" | "Drama CD" | "Unknown" | "Novel",
    source?: string | null,
    episodes?: number | null,

    status?: "Finished Airing" | "Currently Airing" | "Not yet aired" | "Cancelled" | "Hiatus" | "Publishing" | "Finished" | "On Hiatus" | "Not yet published" | "Discontinued",

    airing?: true | false,

    aired?: Aired,

    duration?: string | null,
    rating?: "G - All Ages" | "PG - Children" | "PG-13 - Teens 13 or older" | "R - 17+ (violence & profanity)" | "R+ - Mild Nudity" | "Rx - Hentai",
    score?: number | null,

    scored_by?: number | null,
    rank?: number | null,
    popularity?: number | null,
    members?: number | null,
    favorites?: number | null,
    synopsis?: string | null,
    background?: string | null,
    season?: "summer" | "spring" | "fall" | "winter" | null,
    year?: number | null,
    broadcast?: {
        day?: string | null,
        time?: string | null,
        timezone?: string | null,
        string?: string | null
    },
    producers?: Extra[],
    licensors?: Extra[],
    studios?: Extra[],
    genres?: Extra[],
    explicit_genres?: Extra[],
    themes?: Extra[],
    demographics?: Extra[],
}

export interface MangaResponseData extends ResponseData {
    authors?: Extra[],
    serializations?: Extra[],

    chapters?: number | null,
    volumes?: number | null,
    publishing?: true | false,
    published?: Aired,
    scored?: number | null,
}

export interface Response {
    pagination?: {
        last_visible_page?: number,
        has_next_page?: true,
        items?: {
            count?: number,
            total?: number,
            per_page?: number
        }
    },
    data?: ResponseData[]
}