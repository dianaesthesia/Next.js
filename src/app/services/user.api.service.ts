import {baseUrl, urls} from "@/app/constants/urls";
import {IUserModel} from "@/app/models/IUserModel";

const userApiService = {
    getAll: (): Promise<IUserModel[]> => fetch(baseUrl + urls.users.base).then(value => value.json()),
    getById: (id: string): Promise<IUserModel> => fetch(baseUrl + urls.users.byId(+id)).then(value => value.json())
};

export default userApiService;