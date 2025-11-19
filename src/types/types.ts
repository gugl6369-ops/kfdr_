export interface card{
    id: Number,
    role: CardRole;
    date: Date,
    status: Status,
    title: string,
    subtitle: string, 
    size: CardSize,
    priority: CardPriority,
    deadline: Date,
    redact: Date | null,
    overdue: boolean,
} 


export interface CardSize {
    id: number;
    name: SizeName;
    color: Color;
} 

export interface CardPriority{
    id: number;
    name: PriorityName;
    color: Color;
}
export type PriorityName = "Little" | "Average" | "Big";
export type SizeName = "Small" | "Medium" | "Critical";
export type Color = "green" | "yellow" | "red";

export interface board{
    id: Number,
    name: Status,
    add?: boolean,
    color?: BoardColor,
    bakground?: BoardBackground,
}


export type BoardColor = "#7BDCB5 " | "#FFB3DE" | "#A6E3FF";
export type BoardBackground = "#0A5C3A" | "#7A2A5C" | "#1A4D6B";

export type Status = "Todo" | "In-progress" | "Review" | 'Done';

export interface CardRole {
    id: number;
    name: RoleName;
    color: RoleColor;
}
export type RoleName =  'Designer' | 'Backender' | 'Frontender' | 'Tester' | 'Analyst';
export type RoleColor = "#876ED7" | "#6C8CD5" | "#5CCCCC" | "#FF7D73" | "#65E17B";


export const formatDate = (date: Date): string => 
{
    date = new Date(date);
    const monthName = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    const day = date.getDate();
    const month = monthName[date.getMonth()];
    return `${month} ${day}`;
}