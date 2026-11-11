import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://defbodgjbywlicqiqvrp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZmJvZGdqYnl3bGljcWlxdnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4NzU1MzUsImV4cCI6MjEwOTQ1MTUzNX0.iAqtXkvUVc4lmI46hb4hQWsFFYCNBPgZHbwOwqpXyl4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
