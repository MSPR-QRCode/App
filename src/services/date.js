import dayjs from 'dayjs'; 

/**
 * Format date : DD/MM/YYYY
 * @categorie service
 * @method
 * @param {*} date 
 * @return dayjs
 */
export const formatDate = (date) => {
    return dayjs(date * 1000).format('DD/MM/YYYY');
}
