
const fs = require("fs");
const path = require("path");

const tableNameList = {
  user: [
    "user_id", "username", "password", "name", "email", "contact_number",
    "is_active", "is_verified", "attributes", "created_by"
  ],
  address_book: [
    "address_book_id", "user_id", "address_line1", "address_line2", "city",
    "state", "country", "zip_code", "is_default", "attributes", "created_by"
  ],
  category: [
    "category_id", "name", "slug", "parent_category_id", "description",
    "attributes", "created_by"
  ],
  brand: ["brand_id", "name", "description", "attributes", "created_by"],
  product: [
    "product_id", "name", "slug", "description", "brand_id", "category_id",
    "price", "discount_price", "sku", "is_active", "attributes", "created_by"
  ],
  product_inventory: [
    "product_inventory_id", "product_id", "stock_quantity", "reserved_quantity",
    "warehouse_location", "attributes", "created_by"
  ],
  product_image: [
    "product_image_id", "product_id", "image_url", "alt_text", "is_main",
    "attributes", "created_by"
  ],
  cart: ["cart_id", "user_id", "attributes", "created_by"],
  cart_item: [
    "cart_item_id", "cart_id", "product_id", "quantity", "attributes", "created_by"
  ],
  order: [
    "order_id", "user_id", "order_number", "total_amount", "shipping_fee",
    "discount_amount", "payment_status", "order_status", "shipping_address_id",
    "attributes", "created_by"
  ],
  order_item: [
    "order_item_id", "order_id", "product_id", "quantity", "unit_price",
    "total_price", "attributes", "created_by"
  ],
  payment: [
    "payment_id", "order_id", "payment_method", "payment_reference", "amount",
    "status", "paid_at", "attributes", "created_by"
  ],
  shipping: [
    "shipping_id", "order_id", "courier_name", "tracking_number", "status",
    "shipped_at", "delivered_at", "attributes", "created_by"
  ],
  coupon: [
    "coupon_id", "code", "discount_value", "min_order_value", "max_discount",
    "valid_from", "valid_to", "is_active", "usage_limit", "usage_count",
    "attributes", "created_by"
  ],
  review: [
    "review_id", "user_id", "product_id", "rating", "comment", "attributes", "created_by"
  ],
  audit_log: [
    "audit_log_id", "entity_type", "entity_id", "action", "user_id",
    "old_data", "new_data", "attributes", "created_by"
  ],
};

// 🔍 Infer type by column name
const inferType = (key) => {
  if (key.includes("id") || key.includes("number") || key === "sku" || key.endsWith("_id")) {
    return "String";
  }
  if (key.startsWith("is_")) {
    return "Boolean";
  }
  if (["amount", "price", "discount", "quantity", "usage_count", "usage_limit", "rating"].some(k => key.includes(k))) {
    return "Number";
  }
  if (["valid_from", "valid_to", "paid_at", "shipped_at", "delivered_at"].includes(key)) {
    return "Date";
  }
  if (["attributes", "old_data", "new_data"].includes(key)) {
    return "Schema.Types.Mixed";
  }
  return "String";
};

// 🔧 Generate schema string
const generateSchema = (modelName, fields) => {
  const className = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  const schemaFields = fields
    .map((field) => {
      const type = inferType(field);
      return `  ${field}: { type: ${type} },`;
    })
    .join("\n");

  return `const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ${modelName}Schema = new Schema({
${schemaFields}
}, {
  timestamps: true,
  collection: "${modelName}"
});

module.exports = mongoose.model("${className}", ${modelName}Schema);
`;
};

// 🧾 Output all models to files (or log)
Object.entries(tableNameList).forEach(([modelName, fields]) => {
  const schema = generateSchema(modelName, fields);
  const filePath = path.join(__dirname, `${modelName}.model.js`);
  fs.writeFileSync(filePath, schema);
  console.log(`✅ Generated: ${filePath}`);
});


