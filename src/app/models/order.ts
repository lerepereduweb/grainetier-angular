export class Order {

    id: number;
    //num_order: number;
    id_user_ask: number;
    id_user_answer: number;
    date_order: Date;
    modif_order: Date;
    vxf_valid: boolean;
    vxf_send: boolean;
    vxf_deliver: boolean;
    vxf_pb: boolean;
    state_order: boolean;
    id_offer_ask?: number;
    id_offer_answer?: number;
    comment_ask?: string;
    comment_answer?: string;
    comment_pb?: string;

    constructor (id: number, 
        id_user_ask: number, 
        id_user_answer: number,
        date_order: Date,
        modif_order: Date,
        vxf_valid: boolean,
        vxf_send: boolean,
        vxf_deliver: boolean,
        vxf_pb: boolean,
        state_order: boolean,
        id_offer_ask?: number,
        id_offer_answer?: number,
        comment_ask?: string,
        comment_answer?: string,
        comment_pb?: string) {
        this.id = id;
        this.id_user_ask = id_user_ask;
        this.id_user_answer = id_user_answer;
        this.id_offer_ask = id_offer_ask;
        this.id_offer_answer = id_offer_answer;
        this.comment_ask = comment_ask;
        this.comment_answer = comment_answer;
        this.date_order = date_order;
        this.modif_order = modif_order;
        this.vxf_valid = vxf_valid;
        this.vxf_send = vxf_send;
        this.vxf_deliver = vxf_deliver;
        this.vxf_pb = vxf_pb;
        this.comment_pb = comment_pb;
        this.state_order = state_order;
    }

}
