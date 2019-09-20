export function parseHero(json) {
    return {
        id: Number(json.HERO_ID),
        name: json.HERO_NAME,
        image: json.HERO_IMAGE.replace('img\\', '').replace('\\', '/'),
        desc: json.HERO_DESCRIPTION,
        powers: JSON.parse(json.HERO_POWERS),
        teamId: Number(json.TEAM_ID),
    };
}

export function parseHeroExtra(json) {
    const basic = parseHero(json);

    return {
        ...basic,
        rating: json.RATING,
        comments: json.COMMENTS,
    };
}
