﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductListService.Properties.Database
{
    public class Product
    {
        public int ProductId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int ProductTypeId { get; set; }

        public ProductType ProductType { get; set; }

    }
}
