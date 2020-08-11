export class OrderDetail{
    public productId: string;
    public quantity: number;
    public totalOrderAmount: number;
    public recipientName: string;
    public recipientEmail: string;
    public recipientContactNumber: number;
    public senderName: string;
    public senderEmail: string;
    public senderContactNumber: number;
    public additionalMes: string;
    public isSuccess: boolean;
}