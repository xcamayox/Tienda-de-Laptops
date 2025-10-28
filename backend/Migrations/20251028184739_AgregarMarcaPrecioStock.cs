using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MiWebApi.Migrations
{
    /// <inheritdoc />
    public partial class AgregarMarcaPrecioStock : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Marca",
                table: "Laptops",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Precio",
                table: "Laptops",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "Stock",
                table: "Laptops",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Marca",
                table: "Laptops");

            migrationBuilder.DropColumn(
                name: "Precio",
                table: "Laptops");

            migrationBuilder.DropColumn(
                name: "Stock",
                table: "Laptops");
        }
    }
}
