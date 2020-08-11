export class MerchantProducts{
    public merchantName: string;
    public data: [
        {
            id: string,
            name: string,
            description: string,
            price: number
        }
    ];
    public httpCode: number;
    public errorMessage: string;
}