import dayjs from 'dayjs'; 


export const formatDate = (date) => {
    return dayjs(date * 1000).format('DD/MM/YYYY');
}