module.exports = {
    "user": [
        {
            // "user_id": "b0fa7989-aadb-4518-8dfd-bd7c4e6fc2e9",
            "username": "johndoe",
            "password": "hashedpassword",
            "name": "John Doe",
            "email": "john@example.com",
            "contact_number": 1234567890,
            "isActive": true,
            "isVerified": true,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "address_book": [
        {
            // "addressBookId": "f1243268-aa6f-425e-8fd2-d6e2ce60ae81",
            "userId": "b0fa7989-aadb-4518-8dfd-bd7c4e6fc2e9",
            "addressLine1": "123 Street",
            "addressLine2": "Suite 456",
            "city": "New York",
            "state": "NY",
            "country": "USA",
            "zipCode": "10001",
            "isDefault": true,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "category": [
        {
            // "category_id": "cf1275ad-6dc7-4670-b0a6-257f5aa52367",
            "name": "Electronics",
            "slug": "el",
            "parentCategoryId": null,
            "description": "Electronic items",
            "attributes": {},
            "createdBy": "admin"
        },
        {
            // "category_id": "f53fb24f-36b6-43ee-b8a1-dfc4ec583dc9",
            "name": "Mobile Phones",
            "slug": "mobi",
            "parentCategoryId": "cf1275ad-6dc7-4670-b0a6-257f5aa52367",
            "description": "Smartphones and accessories",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "brand": [
        {
            // "brand_id": "5c43b76d-22c9-463c-b325-0038b918b845",
            "name": "Apple",
            "description": "Apple Inc.",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "product": [
        {
            // "product_id": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "name": "iPhone 14",
            "slug": "iphone-14",
            "description": "Latest iPhone model",
            "brandId": "5c43b76d-22c9-463c-b325-0038b918b845",
            "categoryId": "f53fb24f-36b6-43ee-b8a1-dfc4ec583dc9",
            "price": 999.99,
            "discountPrice": 899.99,
            "sku": "APL-IP14",
            "isActive": true,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "product_inventory": [
        {
            // "product_inventory_id": "3914e778-9126-4de7-bc20-b1bb4d2015af",
            "productId": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "stockQuantity": 100,
            "reservedQuantity": 10,
            "warehouseLocation": "WH-01",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "product_image": [
        {
            // "product_image_id": "640e794a-c261-4102-b94a-99cca6c2ba66",
            "productId": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "imageUrl": "https://example.com/iphone14.jpg",
            "altText": "iPhone 14 image",
            "isMain": true,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "cart": [
        {
            "cartId": "7125a483-1800-41d2-b259-75e3e769466e",
            "userId": "b0fa7989-aadb-4518-8dfd-bd7c4e6fc2e9",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "cart_item": [
        {
            // "cart_item_id": "457a93c6-6dc4-42fa-a504-71c3146c7d87",
            "cartId": "7125a483-1800-41d2-b259-75e3e769466e",
            "productId": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "quantity": 1,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "order": [
        {
            // "order_id": "3a5b37f4-44b3-4bc0-bf77-b174f0429175",
            "userId": "b0fa7989-aadb-4518-8dfd-bd7c4e6fc2e9",
            "orderNumber": "ORD-1001",
            "totalAmount": 899.99,
            "shippingFee": 10.0,
            "discountAmount": 100.0,
            "paymentStatus": "paid",
            "orderStatus": "shipped",
            "shippingAddressId": "f1243268-aa6f-425e-8fd2-d6e2ce60ae81",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "order_item": [
        {
            // "order_item_id": "5f938fc9-a6b4-4db9-8cbc-f130c0b5d886",
            "orderId": "3a5b37f4-44b3-4bc0-bf77-b174f0429175",
            "productId": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "quantity": 1,
            "unitPrice": 899.99,
            "totalPrice": 899.99,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "payment": [
        {
            // "payment_id": "ab6f07fd-7a6a-4e72-98c5-ec9377e71259",
            "orderId": "3a5b37f4-44b3-4bc0-bf77-b174f0429175",
            "paymentMethod": "credit_card",
            "paymentReference": "PAY-1234",
            "amount": 899.99,
            "status": "success",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "shipping": [
        {
            // "shipping_id": "e634671f-aeb1-4d66-82e4-79f0f53a31d9",
            "orderId": "3a5b37f4-44b3-4bc0-bf77-b174f0429175",
            "courierName": "FedEx",
            "trackingNumber": "FDX-123456",
            "status": "delivered",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "coupon": [
        {
            // "coupon_id": "73e0bbea-a87f-48d2-bedf-9cce16eab1a4",
            "code": "NEWUSER50",
            "discountValue": 50,
            "minOrderValue": 300,
            "maxDiscount": 100,
            "validFrom": "2025-08-01T00:00:00",
            "validTo": "2025-12-31T23:59:59",
            "isActive": true,
            "usageLimit": 100,
            "usageCount": 0,
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "review": [
        {
            // "review_id": "800e14f2-450c-4122-a089-86bf3aae6064",
            "userId": "b0fa7989-aadb-4518-8dfd-bd7c4e6fc2e9",
            "productId": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "rating": 5,
            "comment": "Great phone!",
            "attributes": {},
            "createdBy": "admin"
        }
    ],
    "audit_log": [
        {
            // "audit_log_id": "d086b43e-d75b-407b-844c-771569186d11",
            "entityType": "product",
            "entityId": "b9ca673c-797d-49ab-ad7b-7d80ed8364ec",
            "action": "create",
            "userId": "b0fa7989-aadb-4518-8dfd-bd7c4e6fc2e9",
            "oldData": null,
            "newData": "{ \"name\": \"iPhone 14\" }",
            "attributes": {},
            "createdBy": "admin"
        }
    ]
}