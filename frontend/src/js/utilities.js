import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";

export const formatDate = date => {
    return format(new Date(date), "MMMM d, y", {
               locale: enUS,
           });
}