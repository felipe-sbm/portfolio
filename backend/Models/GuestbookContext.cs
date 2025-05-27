using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public class GuestbookContext : DbContext
{
    public GuestbookContext(DbContextOptions<GuestbookContext> options)
        : base(options) { }

    public DbSet<Comment> Comments => Set<Comment>();
}