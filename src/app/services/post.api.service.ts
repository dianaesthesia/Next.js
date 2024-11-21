import {baseUrl, urls} from "@/app/constants/urls";
import {IPost} from "@/app/types";

const postApiService = {
    getAll: (): Promise<IPost[]> => fetch(baseUrl + urls.posts.base).then(value => value.json()),
    getById: (id: string): Promise<IPost> => fetch(baseUrl + urls.posts.byId(+id)).then(value => value.json())
};

export default postApiService;