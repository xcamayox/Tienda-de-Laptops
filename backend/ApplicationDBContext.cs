using Microsoft.EntityFrameworkCore;
using MiWebApi.Entidades;

namespace MiWebApi
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext( DbContextOptions options): base(options) {

        
        }
        public DbSet<Laptop>Laptops { get; set; }

    }
}
