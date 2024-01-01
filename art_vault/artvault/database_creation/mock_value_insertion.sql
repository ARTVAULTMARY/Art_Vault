INSERT INTO users (user_id, username, email, password_hash) VALUES
    ('f07b68d3-6921-4af5-bd37-578654ec0db1', 'user1', 'user1@example.com', 'hashed_password_1'),
    ('80a82b56-8404-4d47-9a61-2a4c6a44b9e8', 'user2', 'user2@example.com', 'hashed_password_2'),
    ('ceb0c602-54b7-42b4-9c03-235625b5f8c2', 'user3', 'user3@example.com', 'hashed_password_3');


INSERT INTO galleries (gallery_id, gallery_name, user_id) VALUES
    ('b4f8447f-c9e3-45d0-a51a-586f41f54f2c', 'Gallery 1', 'f07b68d3-6921-4af5-bd37-578654ec0db1'), -- Gallery 1 owned by user 1
    ('04c3f05f-18dc-4693-910e-9a6b857fe2e0', 'Gallery 2', 'f07b68d3-6921-4af5-bd37-578654ec0db1'), -- Gallery 2 owned by user 1
    ('1847c6e7-0be6-4e1a-92db-cd8d079bb97e', 'Gallery 3', '80a82b56-8404-4d47-9a61-2a4c6a44b9e8'), -- Gallery 3 owned by user 2
    ('be685f6d-0464-4b19-bbc8-f9b56e7a2e86', 'Gallery 4', 'ceb0c602-54b7-42b4-9c03-235625b5f8c2'); -- Gallery 4 owned by user 3

INSERT INTO images (image_id, image_url, description) VALUES
    ('bf54d800-6fe4-4f4c-a3cc-855f73dc4f43', 'image_url_1.jpg', 'Description for image 1'),
    ('f5c67451-2f86-4910-a256-780b5bfc8404', 'image_url_2.jpg', 'Description for image 2'),
    ('a894c199-65e7-4f05-a17c-10594f4a597c', 'image_url_3.jpg', 'Description for image 3'),
    ('f08a4320-1e17-4097-9345-64e3b8f3e1ab', 'image_url_4.jpg', 'Description for image 4');

INSERT INTO image_gallery (image_id, gallery_id) VALUES
    ('bf54d800-6fe4-4f4c-a3cc-855f73dc4f43', 'b4f8447f-c9e3-45d0-a51a-586f41f54f2c'), -- Image 1 belongs to Gallery 1
    ('f5c67451-2f86-4910-a256-780b5bfc8404', 'b4f8447f-c9e3-45d0-a51a-586f41f54f2c'), -- Image 2 belongs to Gallery 1
    ('f5c67451-2f86-4910-a256-780b5bfc8404', '04c3f05f-18dc-4693-910e-9a6b857fe2e0'), -- Image 2 belongs to Gallery 2
    ('a894c199-65e7-4f05-a17c-10594f4a597c', '1847c6e7-0be6-4e1a-92db-cd8d079bb97e'), -- Image 3 belongs to Gallery 3
    ('f08a4320-1e17-4097-9345-64e3b8f3e1ab', 'be685f6d-0464-4b19-bbc8-f9b56e7a2e86'); -- Image 4 belongs to Gallery 4
