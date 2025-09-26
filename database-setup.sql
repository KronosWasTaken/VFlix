-- Create user_watchlists table
CREATE TABLE IF NOT EXISTS user_watchlists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  media_id INTEGER NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('movie', 'tv')),
  title TEXT NOT NULL,
  poster_path TEXT,
  added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  watched BOOLEAN DEFAULT FALSE,
  watch_later BOOLEAN DEFAULT FALSE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 10),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, media_id)
);

-- Create user_continue_watching table
CREATE TABLE IF NOT EXISTS user_continue_watching (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  media_id INTEGER NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('movie', 'tv')),
  title TEXT NOT NULL,
  poster_path TEXT,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  last_watched TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  season INTEGER,
  episode INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, media_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_watchlists_user_id ON user_watchlists(user_id);
CREATE INDEX IF NOT EXISTS idx_user_watchlists_media_id ON user_watchlists(media_id);
CREATE INDEX IF NOT EXISTS idx_user_continue_watching_user_id ON user_continue_watching(user_id);
CREATE INDEX IF NOT EXISTS idx_user_continue_watching_media_id ON user_continue_watching(media_id);

-- Enable Row Level Security (RLS)
ALTER TABLE user_watchlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_continue_watching ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_watchlists
CREATE POLICY "Users can view their own watchlist" ON user_watchlists
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own watchlist items" ON user_watchlists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own watchlist items" ON user_watchlists
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own watchlist items" ON user_watchlists
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for user_continue_watching
CREATE POLICY "Users can view their own continue watching" ON user_continue_watching
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own continue watching items" ON user_continue_watching
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own continue watching items" ON user_continue_watching
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own continue watching items" ON user_continue_watching
  FOR DELETE USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_user_watchlists_updated_at 
  BEFORE UPDATE ON user_watchlists 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_continue_watching_updated_at 
  BEFORE UPDATE ON user_continue_watching 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
