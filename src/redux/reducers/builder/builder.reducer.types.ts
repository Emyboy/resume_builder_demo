export interface BuilderAction {
    type: string;
    payload: BuilderStateTypes;
}

export interface BuilderStateTypes {
    meta_title: string;
    meta_description: string;
    meta_img_url: string;
    widget_list: any[];
    keywords: string;
}
