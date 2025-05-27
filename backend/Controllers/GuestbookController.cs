using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GuestbookController : ControllerBase
{
    private readonly GuestbookContext _context;

    public GuestbookController(GuestbookContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Comment>>> GetComments()
    {
        return await _context.Comments
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Comment>> PostComment(Comment comment)
    {
        comment.CreatedAt = DateTime.UtcNow;
        _context.Comments.Add(comment);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetComments), new { id = comment.Id }, comment);
    }
}