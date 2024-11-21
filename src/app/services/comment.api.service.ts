import {baseUrl, urls} from "@/app/constants/urls";
import {ICommentModel} from "@/app/models/ICommentModel";

const commentApiService = {
    getAll: (): Promise<ICommentModel[]> => fetch(baseUrl + urls.comments.base).then(value => value.json()),
    getById: (id: string): Promise<ICommentModel> => fetch(baseUrl + urls.comments.byId(+id)).then(value => value.json())
};

export default commentApiService;