const mongoose = require("mongoose");
const config = require("../../src/config/app.config");

// 🧱 Import your models
const User = require("../../src/models/user.model");
const ProductImage = require("../../src/models/product-image.model");
const ProductInventory = require("../../src/models/product-inventory.model");
const Product = require("../../src/models/product.model");
const Brand = require("../../src/models/brand.model");
const Category = require("../../src/models/category.model");
const AddressBook = require("../../src/models/address-book.model");
const Cart = require("../../src/models/cart.model");
const CartItem = require("../../src/models/cart-item.model");
const Order = require("../../src/models/order.model");
const OrderItem = require("../../src/models/order-item.model");
const Payment = require("../../src/models/payment.model");
const Shipping = require("../../src/models/shipping.model");
const Coupon = require("../../src/models/coupon.model");
const Review = require("../../src/models/review.model");
const AuditLog = require("../../src/models/audit-log.model");

const seedData = require("./initial-data-to-seed");
const { address_book, category, order, order_item, payment, shipping, coupon, review, audit_log } = require("./initial-data-to-seed");


const models = {
    user: User,
    address_book: AddressBook,
    category: Category,
    brand: Brand,
    product: Product,
    product_inventory: ProductInventory,
    product_image: ProductImage,
    cart: Cart,
    cart_item: CartItem,
    order: Order,
    order_item: OrderItem,
    payment: Payment,
    shipping: Shipping,
    coupon: Coupon,
    review: Review,
    audit_log: AuditLog
};

const handleSeedData = async () => {
    const uri = config.env.MONGO_DB_CONNECTION_URI.replace(/\/?$/, "") + "/nodejs-ecommerce-app";

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB:", uri);

        for (const [key, data] of Object.entries(seedData)) {
            console.log("===================", key, data)
            
            const model = models[key];
            if (!model) {
                console.warn(`⚠️  No model found for key '${key}', skipping...`);
                continue;
            }

            console.log(model);
            console.log(`🔄 Seeding collection: ${key}s`);
            await model.deleteMany({});
            const inserted = await model.insertMany(data);
            console.log(`✅ Inserted ${inserted.length} records into '${key}s'`);
        }

    } catch (err) {
        console.error("❌ Error during seeding:", err);
    } finally {
        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");
    }
};

// Run the seeding
handleSeedData();

