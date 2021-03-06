module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        product_price: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        product_image_url: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        product_comment: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    { 
        timestamps: false // prevent autogenerated timestamp attributes (updatedAt, createdAt) 
    }
    );
    return Product;
};
