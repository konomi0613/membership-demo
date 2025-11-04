import { createClient, MicroCMSImage, MicroCMSListContent, MicroCMSQueries } from "microcms-js-sdk";

export type Member = {
    id: string;
    name: string;
    position: string;
    profile: string;
    image?: MicroCMSImage;
    video?: string
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent

export type News = {
    title: string;
    category: Category
    thumbnail?: MicroCMSImage;
    content: string;
} & MicroCMSListContent


if(!process.env.MICROCMS_SERVICE_DOMAIN){
    throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}
if(!process.env.MICROCMS_API_KEY){
    throw new Error("MICROCMS_API_KEY is not defined");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Member>({ 
        endpoint: "members",
        queries,
    });
    return listData;
}

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: "news",
        queries,
    });
    return listData;
}