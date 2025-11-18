export interface card{
    id: Number,
    role: CardRole;
    date: Date,
    status: Status,
    title: String,
    subtitle: String, 
    size: CardSize,
    priority: CardSize,
    deadline: Date,
    redact: Date | null,
    overdue: boolean,
} 


export interface CardSize {
    id: number;
    name: SizeName;
    color: SizeColor;
} 

export type SizeName = "small" | "medium" | "critical";
export type SizeColor = "green" | "yellow" | "red";

export interface board{
    id: Number,
    kids: Number[],
    name: Status,
    lenght: Number,
    add?: boolean,
}

export type Status = "Todo" | "In-progress" | "Review" | 'Done';

export type CardRole =  'Designer' | 'Backender' | 'Frontender' | 'Tester' | 'Analyst';


export const formatDate = (date: Date): string => 
{
    const monthName = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    const day = date.getDate();
    const month = monthName[date.getMonth()];
    return `${month} ${day}`;
}