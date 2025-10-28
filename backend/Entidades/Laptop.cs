namespace MiWebApi.Entidades
{
    public class Laptop
    {
        public int Id { get; set; }
        public required string Nombre { get; set; }
        public  string? Marca { get; set; }
        public  double Precio { get; set; }
        public int Stock { get; set; }
    }
}
