<?php

namespace App\Utility;

class VariantUtility
{
    public static function getVariants($variants_data = array())
    {
        $all_variants = array(array());
        foreach ($variants_data as $key => $value) {
            $values = array();
            foreach ($all_variants as $variant) {
                foreach ($value as $property_value) {
                    $values[] = array_merge($variant, array($key => $property_value));
                }
            }
            $all_variants = $values;
        }
        return $all_variants;
    }
}
