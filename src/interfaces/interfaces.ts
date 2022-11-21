import React from "react";
import { FunctionComponent } from 'react'
import { TablerIconProps } from '@tabler/icons'


export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    // created_at: Date;
    // updated_at: Date;
}

export interface IItemsListData {
    products: IItemProps[]
    total: number
    skip: number
    limit: number
    orientation: string
    scroll: boolean
}

export interface IItemProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    stock: number;
    location: string;
    brand: string;
    thumbnail: string;
    images: Array<string>;
    // seller: User;
}

export interface IItemsListProps {
    items?: IItemProps[]
    category?: string
    title?: string
    limit?: number
    orientation?: string
    scroll?: boolean
    className?: React.HTMLAttributes<HTMLDivElement>['className']
}

export interface ICarouselProps {
    children: React.ReactNode
    gap?: number
    className?: string
}

export interface IInboxItemProps {
    id: number;
    href: string;
    type: string;
    title: string;
    message: string;
    created_at: string;
}

export interface InboxProps {
    type: 'message' | 'notification';
    data: IInboxItemProps[];
    // onMarkAsRead: (id: string) => void;
    // onMarkAllAsRead: () => void;
    // onMarkAsUnread: (id: string) => void;
    // onMarkAllAsUnread: () => void;
    // onRemove: (id: string) => void;
    // onRemoveAll: () => void;
}

export interface IInputProps {
    children?: React.ReactNode
    type?: 'text' | 'email' | 'password'
    name: string
    label?: string
    Icon: FunctionComponent<TablerIconProps>
    value?: string
    placeholder?: string
    message?: string
}
