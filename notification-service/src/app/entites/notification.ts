export interface NotificationProps {
    content: string ;
    category: string ;
};

export class Notification {
    private props: NotificationProps;

    constructor() {
         this.props.content = ""
    }

    public set content(content: string) {
        this.props.content = content;
    }

    public get content() {
        return this.props.content;
    }
};

