namespace shop.api.Models
{
    public class Item
    {
        // public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Count { get; set; }
        public int TotalPrice { get; set; }
        public int Discount { get; set; }
    }
}