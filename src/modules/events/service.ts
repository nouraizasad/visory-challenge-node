interface IQueryParams {
    countryCode?: string,
    city?: string,
    postalCode?: string,
    size?: string,
    page?: string,
    startDateTime?: string,
    endDateTime?: string,
}

export const getEvents = async (queryParams: IQueryParams =  {}) => {
    const { CONSUMER_KEY, TICKERMASTER_URL } = process.env;

    const queryParamsString = Object.entries(queryParams)
        .filter(entry => entry[1])
        .map(entry => `${entry[0]}=${entry[1]}`).join('&');

    const url = `${TICKERMASTER_URL}?apikey=${CONSUMER_KEY}&` + queryParamsString;

    const res = await fetch(<string>url);
    const events = {
        ok: res.ok,
        status: res.status,
        data: await res.json()
    }
    return events;
}
