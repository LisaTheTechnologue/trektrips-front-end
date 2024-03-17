import { Destination } from "./destination.model";

export interface  Trip {
    _id: any;
    title: string;
    destinationId: number;
    highlights: string;
    published: boolean;
  }