using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MiWebApi.Entidades;
using System.ComponentModel;

namespace MiWebApi.Controllers
{
    [Route("api/laptops")]
    public class LaptopsController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        public LaptopsController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<Laptop>> Get()
        {
            return await context.Laptops.ToListAsync();
        }

        [HttpGet("{id:int}", Name = "ObtenerLaptopPorId")]
        public async Task<ActionResult<Laptop>> Get(int id)
        {
            var laptop = await context.Laptops.FirstOrDefaultAsync(x => x.Id == id);
            if (laptop is null)
            {
                return NotFound();
            }
            return laptop;
        }

        [HttpGet("ObtenerLaptopPorIdYNombre")]
        public async Task<List<Laptop>> ObtenerLaptopPorIdYNombre(int id=0,string nombre="")
        {
            if (id > 0 && !string.IsNullOrEmpty(nombre) )
                return await context.Laptops.Where(x =>x.Id==id || x.Nombre.Contains(nombre)).ToListAsync();
            else if(id > 0 && string.IsNullOrEmpty(nombre))
                return await context.Laptops.Where(x => x.Id == id).ToListAsync();
            else if (id ==0 && !string.IsNullOrEmpty(nombre))
                return await context.Laptops.Where(x =>x.Nombre.Contains(nombre)).ToListAsync();
            else
                return await context.Laptops.ToListAsync();
            
        }

        [HttpPost]
        public async Task<CreatedAtRouteResult> Post([FromBody]Laptop laptop)
        {
            context.Add(laptop);
            await context.SaveChangesAsync();
            return CreatedAtRoute("ObtenerLaptopPorId", new { id = laptop.Id }, laptop);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] Laptop laptop)
        {
            var existeLaptop = await context.Laptops.AnyAsync(x => x.Id == id);
            if (!existeLaptop)
            {
                return NotFound();
            }
            laptop.Id = id;
            context.Update(laptop);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var filasBorradas = await context.Laptops.Where(x => x.Id == id).ExecuteDeleteAsync();
            if (filasBorradas == 0)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
