<?php

namespace App\Traits;

    trait RandomStringTrait {

        public function generate_random_string($length = 15 , $case= 'all') {
            $str = "";
            if ($case == 'all'):
                $characters = array_merge(range('A','Z'), range('a','z'), range('0','9'));
            elseif ($case == 'upper'):
                $characters = array_merge(range('A','Z'), range('0','9'));
            elseif ($case == 'lower'):
                $characters = array_merge(range('a','z'), range('0','9'));
            elseif ($case == 'number'):
                $characters = range('0','9');
            endif;
            $max = count($characters) - 1;
            for ($i = 0; $i < $length; $i++) {
                $rand = mt_rand(0, $max);
                $str .= $characters[$rand];
            }
            return $str;
        }

    }
