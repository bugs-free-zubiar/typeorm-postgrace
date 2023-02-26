import { Entity } from "typeorm"
// Created entines for making table
@Entity()
export class Photo {
    id: number
    name: string
    description: string
    filename: string
    views: number
    isPublished: boolean
}