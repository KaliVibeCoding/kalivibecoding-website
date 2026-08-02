-- KaliVibeCoding D1 Schema
-- Run: wrangler d1 execute kalivibecoding-db --remote --file=schema.sql

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  inquiry_type TEXT NOT NULL,
  first_name  TEXT NOT NULL,
  last_name   TEXT NOT NULL,
  email       TEXT NOT NULL,
  organization TEXT,
  participants TEXT,
  timeline    TEXT,
  message     TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  ip          TEXT
);

CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_type ON contact_submissions(inquiry_type);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         TEXT NOT NULL UNIQUE,
  source        TEXT DEFAULT 'website-footer',
  subscribed_at TEXT NOT NULL,
  unsubscribed_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

CREATE TABLE IF NOT EXISTS capability_downloads (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  ip            TEXT NOT NULL,
  downloaded_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cap_downloaded ON capability_downloads(downloaded_at);
