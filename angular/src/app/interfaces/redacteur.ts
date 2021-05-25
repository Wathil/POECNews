export interface Redacteur {
    id?: number;
    userlogin?: string;
    passwd?: string;
    penname?: string;
    accredit?: boolean // Sequelize.INTEGER accredit TINYINT 0 ou 1
}