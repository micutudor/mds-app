export async function getOffers({orderByLatest, category, storeExceptions})
{
    if (storeExceptions == undefined)
        storeExceptions = [];
        
    const request = await fetch('http://172.20.10.12:8080/campaigns', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderByLatest, category, storeExceptions })
    });

    const data = await request.json();
    
    return data;
}

export async function getOfferData(id)
{
    const request = await fetch('http://172.20.10.12:8080/game', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id})
    });

    const data = await request.json();

    return data;
}