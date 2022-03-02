export interface Hero {
    id: string,
    name: string,
    biography: {
        'full-name': string
    },
    image: {
        url: string
    }
}

export interface HeroListProps {
    data: Hero[]
}

export interface HeroProps {
    data: Hero
}
