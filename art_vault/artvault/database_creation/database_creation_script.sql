-- This is script to generate tables for POSTGRES SQL table

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Code to enable POSTGRES from creating UUID's

-- Users Table with UUID primary key
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- Galleries Table with UUID primary key
CREATE TABLE galleries (
    gallery_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    gallery_name VARCHAR(100) NOT NULL,
    user_id UUID REFERENCES users(user_id)
    /* Other gallery details */
);

-- Images Table with UUID primary key
CREATE TABLE images (
    image_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image_url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Image_Gallery Table (Junction Table) with UUIDs
CREATE TABLE image_gallery (
    image_id UUID REFERENCES images(image_id),
    gallery_id UUID REFERENCES galleries(gallery_id),
    PRIMARY KEY (image_id, gallery_id)
);

