import prismaClient from "../prisma";


class LastWeatherService{
    async execute() {
        const lastResult = await prismaClient.weather.findMany({
            take: 1,
            orderBy: {
                date: "desc"
            }
        });
    return lastResult
    }
}


export {LastWeatherService}